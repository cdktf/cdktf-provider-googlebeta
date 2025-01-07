# `googleSpannerBackupSchedule` Submodule <a name="`googleSpannerBackupSchedule` Submodule" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSpannerBackupSchedule <a name="GoogleSpannerBackupSchedule" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule google_spanner_backup_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer"></a>

```typescript
import { googleSpannerBackupSchedule } from '@cdktf/provider-google-beta'

new googleSpannerBackupSchedule.GoogleSpannerBackupSchedule(scope: Construct, id: string, config: GoogleSpannerBackupScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig">GoogleSpannerBackupScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig">GoogleSpannerBackupScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putFullBackupSpec">putFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putIncrementalBackupSpec">putIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetFullBackupSpec">resetFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetIncrementalBackupSpec">resetIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFullBackupSpec` <a name="putFullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putFullBackupSpec"></a>

```typescript
public putFullBackupSpec(value: GoogleSpannerBackupScheduleFullBackupSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putFullBackupSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

---

##### `putIncrementalBackupSpec` <a name="putIncrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putIncrementalBackupSpec"></a>

```typescript
public putIncrementalBackupSpec(value: GoogleSpannerBackupScheduleIncrementalBackupSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putIncrementalBackupSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putSpec"></a>

```typescript
public putSpec(value: GoogleSpannerBackupScheduleSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSpannerBackupScheduleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>

---

##### `resetFullBackupSpec` <a name="resetFullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetFullBackupSpec"></a>

```typescript
public resetFullBackupSpec(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncrementalBackupSpec` <a name="resetIncrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetIncrementalBackupSpec"></a>

```typescript
public resetIncrementalBackupSpec(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetSpec"></a>

```typescript
public resetSpec(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSpannerBackupSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isConstruct"></a>

```typescript
import { googleSpannerBackupSchedule } from '@cdktf/provider-google-beta'

googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformElement"></a>

```typescript
import { googleSpannerBackupSchedule } from '@cdktf/provider-google-beta'

googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformResource"></a>

```typescript
import { googleSpannerBackupSchedule } from '@cdktf/provider-google-beta'

googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport"></a>

```typescript
import { googleSpannerBackupSchedule } from '@cdktf/provider-google-beta'

googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleSpannerBackupSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSpannerBackupSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSpannerBackupSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSpannerBackupSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fullBackupSpec">fullBackupSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference">GoogleSpannerBackupScheduleFullBackupSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.incrementalBackupSpec">incrementalBackupSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference">GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference">GoogleSpannerBackupScheduleSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference">GoogleSpannerBackupScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fullBackupSpecInput">fullBackupSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.incrementalBackupSpecInput">incrementalBackupSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.retentionDurationInput">retentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.retentionDuration">retentionDuration</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fullBackupSpec`<sup>Required</sup> <a name="fullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fullBackupSpec"></a>

```typescript
public readonly fullBackupSpec: GoogleSpannerBackupScheduleFullBackupSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference">GoogleSpannerBackupScheduleFullBackupSpecOutputReference</a>

---

##### `incrementalBackupSpec`<sup>Required</sup> <a name="incrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.incrementalBackupSpec"></a>

```typescript
public readonly incrementalBackupSpec: GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference">GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.spec"></a>

```typescript
public readonly spec: GoogleSpannerBackupScheduleSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference">GoogleSpannerBackupScheduleSpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSpannerBackupScheduleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference">GoogleSpannerBackupScheduleTimeoutsOutputReference</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `fullBackupSpecInput`<sup>Optional</sup> <a name="fullBackupSpecInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fullBackupSpecInput"></a>

```typescript
public readonly fullBackupSpecInput: GoogleSpannerBackupScheduleFullBackupSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `incrementalBackupSpecInput`<sup>Optional</sup> <a name="incrementalBackupSpecInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.incrementalBackupSpecInput"></a>

```typescript
public readonly incrementalBackupSpecInput: GoogleSpannerBackupScheduleIncrementalBackupSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `retentionDurationInput`<sup>Optional</sup> <a name="retentionDurationInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.retentionDurationInput"></a>

```typescript
public readonly retentionDurationInput: string;
```

- *Type:* string

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.specInput"></a>

```typescript
public readonly specInput: GoogleSpannerBackupScheduleSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSpannerBackupScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `retentionDuration`<sup>Required</sup> <a name="retentionDuration" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.retentionDuration"></a>

```typescript
public readonly retentionDuration: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSpannerBackupScheduleConfig <a name="GoogleSpannerBackupScheduleConfig" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.Initializer"></a>

```typescript
import { googleSpannerBackupSchedule } from '@cdktf/provider-google-beta'

const googleSpannerBackupScheduleConfig: googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.database">database</a></code> | <code>string</code> | The database to create the backup schedule on. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.instance">instance</a></code> | <code>string</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.retentionDuration">retentionDuration</a></code> | <code>string</code> | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.fullBackupSpec">fullBackupSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a></code> | full_backup_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#id GoogleSpannerBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.incrementalBackupSpec">incrementalBackupSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a></code> | incremental_backup_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.name">name</a></code> | <code>string</code> | A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#project GoogleSpannerBackupSchedule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database to create the backup schedule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#database GoogleSpannerBackupSchedule#database}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#instance GoogleSpannerBackupSchedule#instance}

---

##### `retentionDuration`<sup>Required</sup> <a name="retentionDuration" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.retentionDuration"></a>

```typescript
public readonly retentionDuration: string;
```

- *Type:* string

At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#retention_duration GoogleSpannerBackupSchedule#retention_duration}

---

##### `fullBackupSpec`<sup>Optional</sup> <a name="fullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.fullBackupSpec"></a>

```typescript
public readonly fullBackupSpec: GoogleSpannerBackupScheduleFullBackupSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

full_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#full_backup_spec GoogleSpannerBackupSchedule#full_backup_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#id GoogleSpannerBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incrementalBackupSpec`<sup>Optional</sup> <a name="incrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.incrementalBackupSpec"></a>

```typescript
public readonly incrementalBackupSpec: GoogleSpannerBackupScheduleIncrementalBackupSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

incremental_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#incremental_backup_spec GoogleSpannerBackupSchedule#incremental_backup_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created.

Values are of the form [a-z][-a-z0-9]*[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#name GoogleSpannerBackupSchedule#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#project GoogleSpannerBackupSchedule#project}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.spec"></a>

```typescript
public readonly spec: GoogleSpannerBackupScheduleSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#spec GoogleSpannerBackupSchedule#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSpannerBackupScheduleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#timeouts GoogleSpannerBackupSchedule#timeouts}

---

### GoogleSpannerBackupScheduleFullBackupSpec <a name="GoogleSpannerBackupScheduleFullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec.Initializer"></a>

```typescript
import { googleSpannerBackupSchedule } from '@cdktf/provider-google-beta'

const googleSpannerBackupScheduleFullBackupSpec: googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec = { ... }
```


### GoogleSpannerBackupScheduleIncrementalBackupSpec <a name="GoogleSpannerBackupScheduleIncrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec.Initializer"></a>

```typescript
import { googleSpannerBackupSchedule } from '@cdktf/provider-google-beta'

const googleSpannerBackupScheduleIncrementalBackupSpec: googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec = { ... }
```


### GoogleSpannerBackupScheduleSpec <a name="GoogleSpannerBackupScheduleSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec.Initializer"></a>

```typescript
import { googleSpannerBackupSchedule } from '@cdktf/provider-google-beta'

const googleSpannerBackupScheduleSpec: googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec.property.cronSpec">cronSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a></code> | cron_spec block. |

---

##### `cronSpec`<sup>Optional</sup> <a name="cronSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec.property.cronSpec"></a>

```typescript
public readonly cronSpec: GoogleSpannerBackupScheduleSpecCronSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a>

cron_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#cron_spec GoogleSpannerBackupSchedule#cron_spec}

---

### GoogleSpannerBackupScheduleSpecCronSpec <a name="GoogleSpannerBackupScheduleSpecCronSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec.Initializer"></a>

```typescript
import { googleSpannerBackupSchedule } from '@cdktf/provider-google-beta'

const googleSpannerBackupScheduleSpecCronSpec: googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec.property.text">text</a></code> | <code>string</code> | Textual representation of the crontab. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Textual representation of the crontab.

User can customize the
backup frequency and the backup version time using the cron
expression. The version time must be in UTC timzeone.
The backup will contain an externally consistent copy of the
database at the version time. Allowed frequencies are 12 hour, 1 day,
1 week and 1 month. Examples of valid cron specifications:
  0 2/12 * * * : every 12 hours at (2, 14) hours past midnight in UTC.
  0 2,14 * * * : every 12 hours at (2,14) hours past midnight in UTC.
  0 2 * * *    : once a day at 2 past midnight in UTC.
  0 2 * * 0    : once a week every Sunday at 2 past midnight in UTC.
  0 2 8 * *    : once a month on 8th day at 2 past midnight in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#text GoogleSpannerBackupSchedule#text}

---

### GoogleSpannerBackupScheduleTimeouts <a name="GoogleSpannerBackupScheduleTimeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.Initializer"></a>

```typescript
import { googleSpannerBackupSchedule } from '@cdktf/provider-google-beta'

const googleSpannerBackupScheduleTimeouts: googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#create GoogleSpannerBackupSchedule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#delete GoogleSpannerBackupSchedule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#update GoogleSpannerBackupSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#create GoogleSpannerBackupSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#delete GoogleSpannerBackupSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_backup_schedule#update GoogleSpannerBackupSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSpannerBackupScheduleFullBackupSpecOutputReference <a name="GoogleSpannerBackupScheduleFullBackupSpecOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer"></a>

```typescript
import { googleSpannerBackupSchedule } from '@cdktf/provider-google-beta'

new googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSpannerBackupScheduleFullBackupSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

---


### GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference <a name="GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer"></a>

```typescript
import { googleSpannerBackupSchedule } from '@cdktf/provider-google-beta'

new googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSpannerBackupScheduleIncrementalBackupSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

---


### GoogleSpannerBackupScheduleSpecCronSpecOutputReference <a name="GoogleSpannerBackupScheduleSpecCronSpecOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer"></a>

```typescript
import { googleSpannerBackupSchedule } from '@cdktf/provider-google-beta'

new googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSpannerBackupScheduleSpecCronSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a>

---


### GoogleSpannerBackupScheduleSpecOutputReference <a name="GoogleSpannerBackupScheduleSpecOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer"></a>

```typescript
import { googleSpannerBackupSchedule } from '@cdktf/provider-google-beta'

new googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.putCronSpec">putCronSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resetCronSpec">resetCronSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCronSpec` <a name="putCronSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.putCronSpec"></a>

```typescript
public putCronSpec(value: GoogleSpannerBackupScheduleSpecCronSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.putCronSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a>

---

##### `resetCronSpec` <a name="resetCronSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resetCronSpec"></a>

```typescript
public resetCronSpec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.cronSpec">cronSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference">GoogleSpannerBackupScheduleSpecCronSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.cronSpecInput">cronSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronSpec`<sup>Required</sup> <a name="cronSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.cronSpec"></a>

```typescript
public readonly cronSpec: GoogleSpannerBackupScheduleSpecCronSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference">GoogleSpannerBackupScheduleSpecCronSpecOutputReference</a>

---

##### `cronSpecInput`<sup>Optional</sup> <a name="cronSpecInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.cronSpecInput"></a>

```typescript
public readonly cronSpecInput: GoogleSpannerBackupScheduleSpecCronSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSpannerBackupScheduleSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

---


### GoogleSpannerBackupScheduleTimeoutsOutputReference <a name="GoogleSpannerBackupScheduleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSpannerBackupSchedule } from '@cdktf/provider-google-beta'

new googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSpannerBackupScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>

---



