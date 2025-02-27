# `googleCertificateManagerCertificate` Submodule <a name="`googleCertificateManagerCertificate` Submodule" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCertificateManagerCertificate <a name="GoogleCertificateManagerCertificate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate google_certificate_manager_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

new googleCertificateManagerCertificate.GoogleCertificateManagerCertificate(scope: Construct, id: string, config: GoogleCertificateManagerCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig">GoogleCertificateManagerCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig">GoogleCertificateManagerCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putManaged">putManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putSelfManaged">putSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetManaged">resetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetSelfManaged">resetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManaged` <a name="putManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putManaged"></a>

```typescript
public putManaged(value: GoogleCertificateManagerCertificateManaged): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putManaged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged">GoogleCertificateManagerCertificateManaged</a>

---

##### `putSelfManaged` <a name="putSelfManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putSelfManaged"></a>

```typescript
public putSelfManaged(value: GoogleCertificateManagerCertificateSelfManaged): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged">GoogleCertificateManagerCertificateSelfManaged</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCertificateManagerCertificateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts">GoogleCertificateManagerCertificateTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetManaged` <a name="resetManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetManaged"></a>

```typescript
public resetManaged(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSelfManaged` <a name="resetSelfManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetSelfManaged"></a>

```typescript
public resetSelfManaged(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCertificateManagerCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isConstruct"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isTerraformElement"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isTerraformResource"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.generateConfigForImport"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleCertificateManagerCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCertificateManagerCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCertificateManagerCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCertificateManagerCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.managed">managed</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference">GoogleCertificateManagerCertificateManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.sanDnsnames">sanDnsnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference">GoogleCertificateManagerCertificateSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference">GoogleCertificateManagerCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.managedInput">managedInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged">GoogleCertificateManagerCertificateManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.selfManagedInput">selfManagedInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged">GoogleCertificateManagerCertificateSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts">GoogleCertificateManagerCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.managed"></a>

```typescript
public readonly managed: GoogleCertificateManagerCertificateManagedOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference">GoogleCertificateManagerCertificateManagedOutputReference</a>

---

##### `sanDnsnames`<sup>Required</sup> <a name="sanDnsnames" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.sanDnsnames"></a>

```typescript
public readonly sanDnsnames: string[];
```

- *Type:* string[]

---

##### `selfManaged`<sup>Required</sup> <a name="selfManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.selfManaged"></a>

```typescript
public readonly selfManaged: GoogleCertificateManagerCertificateSelfManagedOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference">GoogleCertificateManagerCertificateSelfManagedOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCertificateManagerCertificateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference">GoogleCertificateManagerCertificateTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.managedInput"></a>

```typescript
public readonly managedInput: GoogleCertificateManagerCertificateManaged;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged">GoogleCertificateManagerCertificateManaged</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `selfManagedInput`<sup>Optional</sup> <a name="selfManagedInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.selfManagedInput"></a>

```typescript
public readonly selfManagedInput: GoogleCertificateManagerCertificateSelfManaged;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged">GoogleCertificateManagerCertificateSelfManaged</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCertificateManagerCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts">GoogleCertificateManagerCertificateTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCertificateManagerCertificateConfig <a name="GoogleCertificateManagerCertificateConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.Initializer"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

const googleCertificateManagerCertificateConfig: googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.name">name</a></code> | <code>string</code> | A user-defined name of the certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#id GoogleCertificateManagerCertificate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the Certificate resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.location">location</a></code> | <code>string</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.managed">managed</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged">GoogleCertificateManagerCertificateManaged</a></code> | managed block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#project GoogleCertificateManagerCertificate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.scope">scope</a></code> | <code>string</code> | The scope of the certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged">GoogleCertificateManagerCertificateSelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts">GoogleCertificateManagerCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A user-defined name of the certificate.

Certificate names must be unique
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#name GoogleCertificateManagerCertificate#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#description GoogleCertificateManagerCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#id GoogleCertificateManagerCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the Certificate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#labels GoogleCertificateManagerCertificate#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#location GoogleCertificateManagerCertificate#location}

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.managed"></a>

```typescript
public readonly managed: GoogleCertificateManagerCertificateManaged;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged">GoogleCertificateManagerCertificateManaged</a>

managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#managed GoogleCertificateManagerCertificate#managed}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#project GoogleCertificateManagerCertificate#project}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The scope of the certificate.

DEFAULT: Certificates with default scope are served from core Google data centers.
If unsure, choose this option.

EDGE_CACHE: Certificates with scope EDGE_CACHE are special-purposed certificates, served from Edge Points of Presence.
See https://cloud.google.com/vpc/docs/edge-locations.

ALL_REGIONS: Certificates with ALL_REGIONS scope are served from all GCP regions (You can only use ALL_REGIONS with global certs).
See https://cloud.google.com/compute/docs/regions-zones

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#scope GoogleCertificateManagerCertificate#scope}

---

##### `selfManaged`<sup>Optional</sup> <a name="selfManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.selfManaged"></a>

```typescript
public readonly selfManaged: GoogleCertificateManagerCertificateSelfManaged;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged">GoogleCertificateManagerCertificateSelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#self_managed GoogleCertificateManagerCertificate#self_managed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCertificateManagerCertificateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts">GoogleCertificateManagerCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#timeouts GoogleCertificateManagerCertificate#timeouts}

---

### GoogleCertificateManagerCertificateManaged <a name="GoogleCertificateManagerCertificateManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged.Initializer"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

const googleCertificateManagerCertificateManaged: googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged.property.dnsAuthorizations">dnsAuthorizations</a></code> | <code>string[]</code> | Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged.property.domains">domains</a></code> | <code>string[]</code> | The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged.property.issuanceConfig">issuanceConfig</a></code> | <code>string</code> | The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/* /locations/* /certificateIssuanceConfigs/*. |

---

##### `dnsAuthorizations`<sup>Optional</sup> <a name="dnsAuthorizations" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged.property.dnsAuthorizations"></a>

```typescript
public readonly dnsAuthorizations: string[];
```

- *Type:* string[]

Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#dns_authorizations GoogleCertificateManagerCertificate#dns_authorizations}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#domains GoogleCertificateManagerCertificate#domains}

---

##### `issuanceConfig`<sup>Optional</sup> <a name="issuanceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged.property.issuanceConfig"></a>

```typescript
public readonly issuanceConfig: string;
```

- *Type:* string

The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/* /locations/* /certificateIssuanceConfigs/*.

If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.
Either issuanceConfig or dnsAuthorizations should be specificed, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#issuance_config GoogleCertificateManagerCertificate#issuance_config}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo <a name="GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo.Initializer"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

const googleCertificateManagerCertificateManagedAuthorizationAttemptInfo: googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo = { ... }
```


### GoogleCertificateManagerCertificateManagedProvisioningIssue <a name="GoogleCertificateManagerCertificateManagedProvisioningIssue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssue.Initializer"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

const googleCertificateManagerCertificateManagedProvisioningIssue: googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssue = { ... }
```


### GoogleCertificateManagerCertificateSelfManaged <a name="GoogleCertificateManagerCertificateSelfManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.Initializer"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

const googleCertificateManagerCertificateSelfManaged: googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.property.certificatePem">certificatePem</a></code> | <code>string</code> | The certificate chain in PEM-encoded form. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.property.pemCertificate">pemCertificate</a></code> | <code>string</code> | The certificate chain in PEM-encoded form. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.property.pemPrivateKey">pemPrivateKey</a></code> | <code>string</code> | The private key of the leaf certificate in PEM-encoded form. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.property.privateKeyPem">privateKeyPem</a></code> | <code>string</code> | The private key of the leaf certificate in PEM-encoded form. |

---

##### `certificatePem`<sup>Optional</sup> <a name="certificatePem" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.property.certificatePem"></a>

```typescript
public readonly certificatePem: string;
```

- *Type:* string

The certificate chain in PEM-encoded form.

Leaf certificate comes first, followed by intermediate ones if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#certificate_pem GoogleCertificateManagerCertificate#certificate_pem}

---

##### `pemCertificate`<sup>Optional</sup> <a name="pemCertificate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.property.pemCertificate"></a>

```typescript
public readonly pemCertificate: string;
```

- *Type:* string

The certificate chain in PEM-encoded form.

Leaf certificate comes first, followed by intermediate ones if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#pem_certificate GoogleCertificateManagerCertificate#pem_certificate}

---

##### `pemPrivateKey`<sup>Optional</sup> <a name="pemPrivateKey" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.property.pemPrivateKey"></a>

```typescript
public readonly pemPrivateKey: string;
```

- *Type:* string

The private key of the leaf certificate in PEM-encoded form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#pem_private_key GoogleCertificateManagerCertificate#pem_private_key}

---

##### `privateKeyPem`<sup>Optional</sup> <a name="privateKeyPem" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.property.privateKeyPem"></a>

```typescript
public readonly privateKeyPem: string;
```

- *Type:* string

The private key of the leaf certificate in PEM-encoded form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#private_key_pem GoogleCertificateManagerCertificate#private_key_pem}

---

### GoogleCertificateManagerCertificateTimeouts <a name="GoogleCertificateManagerCertificateTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts.Initializer"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

const googleCertificateManagerCertificateTimeouts: googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#create GoogleCertificateManagerCertificate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#delete GoogleCertificateManagerCertificate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#update GoogleCertificateManagerCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#create GoogleCertificateManagerCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#delete GoogleCertificateManagerCertificate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_certificate_manager_certificate#update GoogleCertificateManagerCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList <a name="GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

new googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.get"></a>

```typescript
public get(index: number): GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference <a name="GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

new googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo">GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo">GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo</a>

---


### GoogleCertificateManagerCertificateManagedOutputReference <a name="GoogleCertificateManagerCertificateManagedOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.Initializer"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

new googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resetDnsAuthorizations">resetDnsAuthorizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resetIssuanceConfig">resetIssuanceConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsAuthorizations` <a name="resetDnsAuthorizations" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resetDnsAuthorizations"></a>

```typescript
public resetDnsAuthorizations(): void
```

##### `resetDomains` <a name="resetDomains" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resetDomains"></a>

```typescript
public resetDomains(): void
```

##### `resetIssuanceConfig` <a name="resetIssuanceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resetIssuanceConfig"></a>

```typescript
public resetIssuanceConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.authorizationAttemptInfo">authorizationAttemptInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList">GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.provisioningIssue">provisioningIssue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList">GoogleCertificateManagerCertificateManagedProvisioningIssueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.dnsAuthorizationsInput">dnsAuthorizationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.domainsInput">domainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.issuanceConfigInput">issuanceConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.dnsAuthorizations">dnsAuthorizations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.issuanceConfig">issuanceConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged">GoogleCertificateManagerCertificateManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationAttemptInfo`<sup>Required</sup> <a name="authorizationAttemptInfo" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.authorizationAttemptInfo"></a>

```typescript
public readonly authorizationAttemptInfo: GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList">GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList</a>

---

##### `provisioningIssue`<sup>Required</sup> <a name="provisioningIssue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.provisioningIssue"></a>

```typescript
public readonly provisioningIssue: GoogleCertificateManagerCertificateManagedProvisioningIssueList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList">GoogleCertificateManagerCertificateManagedProvisioningIssueList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `dnsAuthorizationsInput`<sup>Optional</sup> <a name="dnsAuthorizationsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.dnsAuthorizationsInput"></a>

```typescript
public readonly dnsAuthorizationsInput: string[];
```

- *Type:* string[]

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.domainsInput"></a>

```typescript
public readonly domainsInput: string[];
```

- *Type:* string[]

---

##### `issuanceConfigInput`<sup>Optional</sup> <a name="issuanceConfigInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.issuanceConfigInput"></a>

```typescript
public readonly issuanceConfigInput: string;
```

- *Type:* string

---

##### `dnsAuthorizations`<sup>Required</sup> <a name="dnsAuthorizations" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.dnsAuthorizations"></a>

```typescript
public readonly dnsAuthorizations: string[];
```

- *Type:* string[]

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `issuanceConfig`<sup>Required</sup> <a name="issuanceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.issuanceConfig"></a>

```typescript
public readonly issuanceConfig: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCertificateManagerCertificateManaged;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged">GoogleCertificateManagerCertificateManaged</a>

---


### GoogleCertificateManagerCertificateManagedProvisioningIssueList <a name="GoogleCertificateManagerCertificateManagedProvisioningIssueList" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.Initializer"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

new googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.get"></a>

```typescript
public get(index: number): GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference <a name="GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

new googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssue">GoogleCertificateManagerCertificateManagedProvisioningIssue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCertificateManagerCertificateManagedProvisioningIssue;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssue">GoogleCertificateManagerCertificateManagedProvisioningIssue</a>

---


### GoogleCertificateManagerCertificateSelfManagedOutputReference <a name="GoogleCertificateManagerCertificateSelfManagedOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.Initializer"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

new googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resetCertificatePem">resetCertificatePem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resetPemCertificate">resetPemCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resetPemPrivateKey">resetPemPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resetPrivateKeyPem">resetPrivateKeyPem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificatePem` <a name="resetCertificatePem" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resetCertificatePem"></a>

```typescript
public resetCertificatePem(): void
```

##### `resetPemCertificate` <a name="resetPemCertificate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resetPemCertificate"></a>

```typescript
public resetPemCertificate(): void
```

##### `resetPemPrivateKey` <a name="resetPemPrivateKey" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resetPemPrivateKey"></a>

```typescript
public resetPemPrivateKey(): void
```

##### `resetPrivateKeyPem` <a name="resetPrivateKeyPem" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resetPrivateKeyPem"></a>

```typescript
public resetPrivateKeyPem(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.certificatePemInput">certificatePemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.pemCertificateInput">pemCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKeyInput">pemPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPemInput">privateKeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.certificatePem">certificatePem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKey">pemPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPem">privateKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged">GoogleCertificateManagerCertificateSelfManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificatePemInput`<sup>Optional</sup> <a name="certificatePemInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.certificatePemInput"></a>

```typescript
public readonly certificatePemInput: string;
```

- *Type:* string

---

##### `pemCertificateInput`<sup>Optional</sup> <a name="pemCertificateInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.pemCertificateInput"></a>

```typescript
public readonly pemCertificateInput: string;
```

- *Type:* string

---

##### `pemPrivateKeyInput`<sup>Optional</sup> <a name="pemPrivateKeyInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKeyInput"></a>

```typescript
public readonly pemPrivateKeyInput: string;
```

- *Type:* string

---

##### `privateKeyPemInput`<sup>Optional</sup> <a name="privateKeyPemInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPemInput"></a>

```typescript
public readonly privateKeyPemInput: string;
```

- *Type:* string

---

##### `certificatePem`<sup>Required</sup> <a name="certificatePem" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.certificatePem"></a>

```typescript
public readonly certificatePem: string;
```

- *Type:* string

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.pemCertificate"></a>

```typescript
public readonly pemCertificate: string;
```

- *Type:* string

---

##### `pemPrivateKey`<sup>Required</sup> <a name="pemPrivateKey" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKey"></a>

```typescript
public readonly pemPrivateKey: string;
```

- *Type:* string

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPem"></a>

```typescript
public readonly privateKeyPem: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCertificateManagerCertificateSelfManaged;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged">GoogleCertificateManagerCertificateSelfManaged</a>

---


### GoogleCertificateManagerCertificateTimeoutsOutputReference <a name="GoogleCertificateManagerCertificateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCertificateManagerCertificate } from '@cdktf/provider-google-beta'

new googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts">GoogleCertificateManagerCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCertificateManagerCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts">GoogleCertificateManagerCertificateTimeouts</a>

---



