# `googleNetworkConnectivityInternalRange` Submodule <a name="`googleNetworkConnectivityInternalRange` Submodule" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityInternalRange <a name="GoogleNetworkConnectivityInternalRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range google_network_connectivity_internal_range}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer"></a>

```typescript
import { googleNetworkConnectivityInternalRange } from '@cdktf/provider-google-beta'

new googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange(scope: Construct, id: string, config: GoogleNetworkConnectivityInternalRangeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig">GoogleNetworkConnectivityInternalRangeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig">GoogleNetworkConnectivityInternalRangeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putMigration">putMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetIpCidrRange">resetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetMigration">resetMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetOverlaps">resetOverlaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetPrefixLength">resetPrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetTargetCidrRange">resetTargetCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMigration` <a name="putMigration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putMigration"></a>

```typescript
public putMigration(value: GoogleNetworkConnectivityInternalRangeMigration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkConnectivityInternalRangeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpCidrRange` <a name="resetIpCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetIpCidrRange"></a>

```typescript
public resetIpCidrRange(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMigration` <a name="resetMigration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetMigration"></a>

```typescript
public resetMigration(): void
```

##### `resetOverlaps` <a name="resetOverlaps" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetOverlaps"></a>

```typescript
public resetOverlaps(): void
```

##### `resetPrefixLength` <a name="resetPrefixLength" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetPrefixLength"></a>

```typescript
public resetPrefixLength(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTargetCidrRange` <a name="resetTargetCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetTargetCidrRange"></a>

```typescript
public resetTargetCidrRange(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkConnectivityInternalRange resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isConstruct"></a>

```typescript
import { googleNetworkConnectivityInternalRange } from '@cdktf/provider-google-beta'

googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformElement"></a>

```typescript
import { googleNetworkConnectivityInternalRange } from '@cdktf/provider-google-beta'

googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformResource"></a>

```typescript
import { googleNetworkConnectivityInternalRange } from '@cdktf/provider-google-beta'

googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport"></a>

```typescript
import { googleNetworkConnectivityInternalRange } from '@cdktf/provider-google-beta'

googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetworkConnectivityInternalRange resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkConnectivityInternalRange to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkConnectivityInternalRange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityInternalRange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference">GoogleNetworkConnectivityInternalRangeMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference">GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.migrationInput">migrationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.overlapsInput">overlapsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.peeringInput">peeringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.prefixLengthInput">prefixLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.targetCidrRangeInput">targetCidrRangeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.usageInput">usageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.overlaps">overlaps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.peering">peering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.prefixLength">prefixLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.targetCidrRange">targetCidrRange</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.usage">usage</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `migration`<sup>Required</sup> <a name="migration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.migration"></a>

```typescript
public readonly migration: GoogleNetworkConnectivityInternalRangeMigrationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference">GoogleNetworkConnectivityInternalRangeMigrationOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference">GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.ipCidrRangeInput"></a>

```typescript
public readonly ipCidrRangeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `migrationInput`<sup>Optional</sup> <a name="migrationInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.migrationInput"></a>

```typescript
public readonly migrationInput: GoogleNetworkConnectivityInternalRangeMigration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `overlapsInput`<sup>Optional</sup> <a name="overlapsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.overlapsInput"></a>

```typescript
public readonly overlapsInput: string[];
```

- *Type:* string[]

---

##### `peeringInput`<sup>Optional</sup> <a name="peeringInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.peeringInput"></a>

```typescript
public readonly peeringInput: string;
```

- *Type:* string

---

##### `prefixLengthInput`<sup>Optional</sup> <a name="prefixLengthInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.prefixLengthInput"></a>

```typescript
public readonly prefixLengthInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `targetCidrRangeInput`<sup>Optional</sup> <a name="targetCidrRangeInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.targetCidrRangeInput"></a>

```typescript
public readonly targetCidrRangeInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkConnectivityInternalRangeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>

---

##### `usageInput`<sup>Optional</sup> <a name="usageInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.usageInput"></a>

```typescript
public readonly usageInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `overlaps`<sup>Required</sup> <a name="overlaps" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.overlaps"></a>

```typescript
public readonly overlaps: string[];
```

- *Type:* string[]

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.peering"></a>

```typescript
public readonly peering: string;
```

- *Type:* string

---

##### `prefixLength`<sup>Required</sup> <a name="prefixLength" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.prefixLength"></a>

```typescript
public readonly prefixLength: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `targetCidrRange`<sup>Required</sup> <a name="targetCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.targetCidrRange"></a>

```typescript
public readonly targetCidrRange: string[];
```

- *Type:* string[]

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.usage"></a>

```typescript
public readonly usage: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityInternalRangeConfig <a name="GoogleNetworkConnectivityInternalRangeConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.Initializer"></a>

```typescript
import { googleNetworkConnectivityInternalRange } from '@cdktf/provider-google-beta'

const googleNetworkConnectivityInternalRangeConfig: googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.name">name</a></code> | <code>string</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.network">network</a></code> | <code>string</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.peering">peering</a></code> | <code>string</code> | The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.usage">usage</a></code> | <code>string</code> | The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC", "FOR_MIGRATION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#id GoogleNetworkConnectivityInternalRange#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | The IP range that this internal range defines. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.overlaps">overlaps</a></code> | <code>string[]</code> | Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.prefixLength">prefixLength</a></code> | <code>number</code> | An alternate to ipCidrRange. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#project GoogleNetworkConnectivityInternalRange#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.targetCidrRange">targetCidrRange</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#name GoogleNetworkConnectivityInternalRange#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#network GoogleNetworkConnectivityInternalRange#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.peering"></a>

```typescript
public readonly peering: string;
```

- *Type:* string

The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#peering GoogleNetworkConnectivityInternalRange#peering}

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.usage"></a>

```typescript
public readonly usage: string;
```

- *Type:* string

The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC", "FOR_MIGRATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#usage GoogleNetworkConnectivityInternalRange#usage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#description GoogleNetworkConnectivityInternalRange#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#id GoogleNetworkConnectivityInternalRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

The IP range that this internal range defines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#ip_cidr_range GoogleNetworkConnectivityInternalRange#ip_cidr_range}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#labels GoogleNetworkConnectivityInternalRange#labels}

---

##### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.migration"></a>

```typescript
public readonly migration: GoogleNetworkConnectivityInternalRangeMigration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#migration GoogleNetworkConnectivityInternalRange#migration}

---

##### `overlaps`<sup>Optional</sup> <a name="overlaps" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.overlaps"></a>

```typescript
public readonly overlaps: string[];
```

- *Type:* string[]

Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#overlaps GoogleNetworkConnectivityInternalRange#overlaps}

---

##### `prefixLength`<sup>Optional</sup> <a name="prefixLength" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.prefixLength"></a>

```typescript
public readonly prefixLength: number;
```

- *Type:* number

An alternate to ipCidrRange.

Can be set when trying to create a reservation that automatically finds a free range of the given size.
If both ipCidrRange and prefixLength are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#prefix_length GoogleNetworkConnectivityInternalRange#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#project GoogleNetworkConnectivityInternalRange#project}.

---

##### `targetCidrRange`<sup>Optional</sup> <a name="targetCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.targetCidrRange"></a>

```typescript
public readonly targetCidrRange: string[];
```

- *Type:* string[]

Optional.

Can be set to narrow down or pick a different address space while searching for a free range.
If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#target_cidr_range GoogleNetworkConnectivityInternalRange#target_cidr_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkConnectivityInternalRangeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#timeouts GoogleNetworkConnectivityInternalRange#timeouts}

---

### GoogleNetworkConnectivityInternalRangeMigration <a name="GoogleNetworkConnectivityInternalRangeMigration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.Initializer"></a>

```typescript
import { googleNetworkConnectivityInternalRange } from '@cdktf/provider-google-beta'

const googleNetworkConnectivityInternalRangeMigration: googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.property.source">source</a></code> | <code>string</code> | Resource path as an URI of the source resource, for example a subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.property.target">target</a></code> | <code>string</code> | Resource path of the target resource. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Resource path as an URI of the source resource, for example a subnet.

The project for the source resource should match the project for the
InternalRange.
An example /projects/{project}/regions/{region}/subnetworks/{subnet}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#source GoogleNetworkConnectivityInternalRange#source}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Resource path of the target resource.

The target project can be
different, as in the cases when migrating to peer networks. The resource
may not exist yet.
For example /projects/{project}/regions/{region}/subnetworks/{subnet}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#target GoogleNetworkConnectivityInternalRange#target}

---

### GoogleNetworkConnectivityInternalRangeTimeouts <a name="GoogleNetworkConnectivityInternalRangeTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.Initializer"></a>

```typescript
import { googleNetworkConnectivityInternalRange } from '@cdktf/provider-google-beta'

const googleNetworkConnectivityInternalRangeTimeouts: googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#create GoogleNetworkConnectivityInternalRange#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#delete GoogleNetworkConnectivityInternalRange#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#update GoogleNetworkConnectivityInternalRange#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#create GoogleNetworkConnectivityInternalRange#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#delete GoogleNetworkConnectivityInternalRange#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_connectivity_internal_range#update GoogleNetworkConnectivityInternalRange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityInternalRangeMigrationOutputReference <a name="GoogleNetworkConnectivityInternalRangeMigrationOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer"></a>

```typescript
import { googleNetworkConnectivityInternalRange } from '@cdktf/provider-google-beta'

new googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkConnectivityInternalRangeMigration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

---


### GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference <a name="GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkConnectivityInternalRange } from '@cdktf/provider-google-beta'

new googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkConnectivityInternalRangeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>

---



